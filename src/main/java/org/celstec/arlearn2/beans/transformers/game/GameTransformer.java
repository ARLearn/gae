package org.celstec.arlearn2.beans.transformers.game;

import com.google.api.server.spi.config.Transformer;
import com.google.gson.Gson;
import org.celstec.arlearn2.beans.game.Game;

public class GameTransformer implements Transformer<Game, String> {


    @Override
    public String transformTo(Game in) {
        return "{}";
    }

    @Override
    public Game transformFrom(String in) {
//        gson.fromJson(in, MyMeasurement.class).toMeasurement();
        return new Game();
    }
}
