package org.celstec.arlearn2.mappers;

import com.google.appengine.tools.mapreduce.KeyValue;
import com.google.appengine.tools.mapreduce.Output;
import com.google.appengine.tools.mapreduce.OutputWriter;
import com.google.appengine.tools.mapreduce.outputs.InMemoryOutput;

import com.google.appengine.tools.mapreduce.Output;
import com.google.appengine.tools.mapreduce.OutputWriter;
import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.jdo.manager.GameManager;
import org.celstec.arlearn2.jdo.manager.TopGamesManager;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * ****************************************************************************
 * Copyright (C) 2013 Open Universiteit Nederland
 * <p/>
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * <p/>
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * <p/>
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * <p/>
 * Contributors: Stefaan Ternier
 * ****************************************************************************
 */
public class CountOutput {//extends Output<KeyValue<String, Long>, List<List<KeyValue<String, Long>>>> {

    public static CountOutput create(int numShards) {
        return new CountOutput(numShards);
    }

    private static class Writer extends OutputWriter<KeyValue<String, Long>> {
    private boolean closed = false;
//        private final List<KeyValue<String, Long>> accu = Lists.newArrayList();

        @Override
        public String toString() {
//            return "InMemoryOutput.Writer(" + accu.size() + " items" + (closed ? ", closed" : " so far")
//                    + ")";
            return "nothing";
        }

        @Override
        public void write(KeyValue<String, Long> value) {
            Preconditions.checkState(!closed, "%s: Already closed", this);
            Long gameId = Long.parseLong(value.getKey());
            Game game = GameManager.getGame(gameId);
            TopGamesManager.addGame(gameId, value.getValue(), game);
//            accu.add(value);
        }

        @Override
        public void close() {
            closed = true;
        }
    }

    private final int shardCount;

    public CountOutput(int shardCount) {
        Preconditions.checkArgument(shardCount >= 0, "Negative shardCount: %s", shardCount);
        this.shardCount = shardCount;
    }

//    @Override
    public List<OutputWriter<KeyValue<String, Long>>> createWriters() {
        ImmutableList.Builder<OutputWriter<KeyValue<String, Long>>> out = ImmutableList.builder();
        for (int i = 0; i < shardCount; i++) {
            out.add(new Writer());
        }
        return out.build();
    }

    /**
     * Returns a list of lists where the outer list has one element for each
     * reduce shard, which is a list of the values emitted by that shard, in
     * order.
     */
//    @Override
    public List<List<KeyValue<String, Long>>> finish(Collection<? extends OutputWriter<KeyValue<String, Long>>> writers) throws IOException {
//        ImmutableList.Builder<List<KeyValue<String, Long>>> out = ImmutableList.builder();
//        for (OutputWriter<KeyValue<String, Long>> w : writers) {
//            Writer writer = (Writer) w;
//            out.add(ImmutableList.copyOf(writer.accu));
//        }
//        return out.build();
        return null;
    }

//    @Override
    public int getNumShards() {
        return shardCount;
    }
}


