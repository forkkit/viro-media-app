/*
 * Copyright © 2017 Viro Media. All rights reserved.
 */
package com.viromedia.viromedia;

import android.content.Intent;
import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

import com.viromedia.viromedia.adapter.ViroSceneListAdapter;

public class EnterViroSceneActivity extends AppCompatActivity {

    private String mSceneName;
    private Boolean mEnterFromMainOrTestbed;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_enter_viro_scene);
        // For fonts
        AssetManager assetManager = getAssets();
        TextView headset_question = (TextView) findViewById(R.id.headset_question);
        Typeface regular = Typeface.createFromAsset(assetManager, "fonts/Raleway-Regular.ttf");
        headset_question.setTypeface(regular);

        Intent intent = getIntent();
        mSceneName = intent.getStringExtra(ViroSceneActivity.EXTRA_SCENE_NAME);
        mEnterFromMainOrTestbed = intent.getBooleanExtra(ViroSceneActivity.LAUNCHED_FROM_MAIN_OR_TESTBED, false);
        ImageButton back_btn = (ImageButton) findViewById(R.id.back_btn);
        back_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }

    @Override
    public void onResume() {
        super.onResume();

        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    public void startViroSceneStereo(View view) {

        startViroSceneActivity(true);
    }

    public void startViroSceneMono(View view) {

        startViroSceneActivity(false);
    }

    private void startViroSceneActivity(boolean enableVrMode) {
        Intent intent = new Intent(getApplicationContext(), ViroSceneActivity.class);
        intent.putExtra(ViroSceneActivity.EXTRA_ENABLE_VR_MODE, enableVrMode);
        intent.putExtra(ViroSceneActivity.EXTRA_SCENE_NAME, mSceneName);
        intent.putExtra(ViroSceneActivity.LAUNCHED_FROM_MAIN_OR_TESTBED, mEnterFromMainOrTestbed);
        startActivity(intent);
    }
}
