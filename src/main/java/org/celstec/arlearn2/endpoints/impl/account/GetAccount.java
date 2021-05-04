package org.celstec.arlearn2.endpoints.impl.account;

import com.google.firebase.auth.FirebaseAuthException;
import org.celstec.arlearn2.endpoints.impl.portaluser.FirebaseAuthPersistence;

public class GetAccount {

    private static GetAccount getAccountInstance = null;

    private GetAccount() {
    }


    public static GetAccount getInstance() {
        if (getAccountInstance == null)
            getAccountInstance = new GetAccount();
        return getAccountInstance;
    }

    public Object getFirebaseUser(String uuid) throws FirebaseAuthException {
        return FirebaseAuthPersistence.getInstance().getUser(uuid);
    }

}
