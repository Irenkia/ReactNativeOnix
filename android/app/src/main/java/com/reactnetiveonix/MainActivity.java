package com.reactnetiveonix;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.content.res.Configuration;// <- for update theme
import android.content.Intent;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactNetiveOnix";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
  }
// for update theme
    // @Override
    // public void onConfigurationChanged(Configuration newConfig) {
    //   super.onConfigurationChanged(newConfig);
    //   getReactInstanceManager().onConfigurationChanged(this, newConfig);
    // }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Intent intent = new Intent("onConfigurationChanged");
    intent.putExtra("newConfig", newConfig);
    sendBroadcast(intent);
  }

}
