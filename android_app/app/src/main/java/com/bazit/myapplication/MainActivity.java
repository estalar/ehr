package com.bazit.myapplication;

import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    SharedPreferences pref;
    TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        pref = getSharedPreferences("ehrData", 0);

        if(pref.getString("Password", "NULL").contentEquals("NULL"))
        {
                    startActivity(new Intent(MainActivity.this, Login.class));
        }

        String string = getIntent().getStringExtra("string");
        tv = findViewById(R.id.text);
        if(string != null)
        tv.setText(string);

    }
}
