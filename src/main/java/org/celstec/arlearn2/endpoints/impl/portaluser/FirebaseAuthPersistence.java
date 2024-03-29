package org.celstec.arlearn2.endpoints.impl.portaluser;


import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.celstec.arlearn2.endpoints.GenericApi.FIREBASE_DATABASE_URL;

public class FirebaseAuthPersistence {


    private static FirebaseAuth firebaseAuth;
    private static FirebaseAuthPersistence instance;

    @SuppressWarnings("JavadocMethod")
    private static FirebaseAuth getFirebaseAuthInstance() {
        if (firebaseAuth == null) {
            FileInputStream serviceAccount = null;
            try {
                serviceAccount = new FileInputStream("WEB-INF/firebase-pk.json");
                FirebaseOptions options = new FirebaseOptions.Builder()
                        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                        .setDatabaseUrl(FIREBASE_DATABASE_URL)
                        .build();

                FirebaseApp.initializeApp(options);
            } catch (FileNotFoundException e) {
                e.printStackTrace();

            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return firebaseAuth;
    }

    private FirebaseAuthPersistence() {
    }

    public static FirebaseAuthPersistence getInstance() {
        if (instance == null) {
            getFirebaseAuthInstance();
            instance = new FirebaseAuthPersistence();
        }
        return instance;
    }

    public UserRecord createFirebaseUser(String email, String password, String displayName) throws FirebaseAuthException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(email)
                .setEmailVerified(false)
                .setPassword(password)
                .setDisplayName(displayName)
                .setDisabled(false);
        return FirebaseAuth.getInstance().createUser(request);
    }


    public UserRecord updateDisplayName(String uid, String displayName) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        request.setDisplayName(displayName);
        return FirebaseAuth.getInstance().updateUser(request);
    }

//    public UserRecord updateExpirationDate(String uid, Long expirationDate) throws FirebaseAuthException {
//        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
//        Map<String, Object> claimsOld = FirebaseAuth.getInstance().getUser(uid).getCustomClaims();
//        Map<String, Object> claims = new HashMap<>();
//        claims.putAll(claimsOld);
//        claims.put("expirationDate", expirationDate);
//        request.setCustomClaims(claims);
//        return FirebaseAuth.getInstance().updateUser(request);
//    }

    public Map<String, Object> setAdvanced(String uid, boolean value) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        Map<String, Object> claimsOld = FirebaseAuth.getInstance().getUser(uid).getCustomClaims();
        Map<String, Object> claims = new HashMap<>();
        claims.putAll(claimsOld);
        claims.put("advanced", value);
        if (!value) {
            claims.remove("advanced");
        }
        request.setCustomClaims(claims);
        FirebaseAuth.getInstance().updateUser(request);
        return claims;
    }

    public Map<String, Object>  makeAdmin(String uid, boolean value) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        Map<String, Object> claimsOld = FirebaseAuth.getInstance().getUser(uid).getCustomClaims();
        Map<String, Object> claims = new HashMap<>();
        claims.putAll(claimsOld);
        claims.put("admin", value);
        if (!value) {
            claims.remove("admin");
        }
        request.setCustomClaims(claims);
        FirebaseAuth.getInstance().updateUser(request);
        return claims;
    }

    public UserRecord setClaims(String uid, String claimsString) throws FirebaseAuthException {
        String[] claimsArray = claimsString.split(",");
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        Map<String, Object> claimsOld = FirebaseAuth.getInstance().getUser(uid).getCustomClaims();
        if (claimsOld.containsKey("admin") && claimsOld.get("admin") == Boolean.TRUE) {
            return FirebaseAuth.getInstance().getUser(uid);
        }
        Map<String, Object> claims = new HashMap<>();
        for (int i = 0; i < claimsArray.length; i++) {
            claims.put(claimsArray[i], true);
        }
        if (claimsOld.containsKey("advanced") && claimsOld.get("advanced") == Boolean.TRUE) {
            claims.put("advanced", true);
        }
        request.setCustomClaims(claims);
        return FirebaseAuth.getInstance().updateUser(request);
    }



    public UserRecord updateUser(String uid, String displayName, Long customerId, Long distributorId, List<String> roles) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        request.setDisplayName(displayName);
        return FirebaseAuth.getInstance().updateUser(request);
    }

    public void deleteUser(String uid) throws FirebaseAuthException {
        FirebaseAuth.getInstance().deleteUser(uid);
    }

    public UserRecord getUser(String uuid)  throws FirebaseAuthException {
        return FirebaseAuth.getInstance().getUser(uuid);
    }

    public String getFirebaseIdViaEmail(String email)  throws FirebaseAuthException {
        return FirebaseAuth.getInstance().getUserByEmail(email).getUid();
    }

    public UserRecord suspend(String uid) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        request.setDisabled(true);
        return FirebaseAuth.getInstance().updateUser(request);
    }

    public UserRecord unSuspend(String uid) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        request.setDisabled(false);
        return FirebaseAuth.getInstance().updateUser(request);
    }

    public UserRecord setPassword(String uid, String password, String displayName) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid);
        request.setPassword(password);
        if (displayName != null){
            request.setDisplayName(displayName);
        }
        request.setEmailVerified(true);
        return FirebaseAuth.getInstance().updateUser(request);
    }
}
