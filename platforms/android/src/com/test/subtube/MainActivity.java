/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.test.subtube;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.os.Bundle;
import android.widget.ImageView;

import org.apache.cordova.*;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate (savedInstanceState);
        animateLoading();
        // Set by <content src="index.html" /> in config.xml
        //loadUrl(launchUrl);
    }

    private void animateLoading() {
        setContentView(R.layout.loading);
        ImageView loadingView = (ImageView) findViewById(R.id.loadingView);

        CustomAnimationDrawable animation = new CustomAnimationDrawable() {
            @Override
            void onAnimationFinish() {
                loadUrl(launchUrl);
            }
        };
        animation.setOneShot(true);
        final int frames = 30;
        final int frameWidth = 240;
        final int frameHeight = 320;
        final int frameDuration = 100;
        final Bitmap bmpImage = BitmapFactory.decodeResource(getResources(), R.drawable.loading);

        for (int currentFrame = 0; currentFrame < frames; currentFrame++) {
            BitmapDrawable frameDrawable = new BitmapDrawable (getResources(), Bitmap.createBitmap(bmpImage,currentFrame * frameWidth, 0, frameWidth, frameHeight) );
            animation.addFrame(frameDrawable, frameDuration);
        }

        loadingView.setBackground (animation);
        animation.start();
    }
}
