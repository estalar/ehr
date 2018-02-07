package com.bazit.myapplication;

import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class Login extends AppCompatActivity {
    SharedPreferences pref;
    EditText Password;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Password = findViewById(R.id.input_password);
        pref = getSharedPreferences("ehrData", 0);

        findViewById(R.id.btn_login).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String pText = Password.getText().toString();

                // TODO: Implement your own authentication logic here.

                SharedPreferences.Editor editor = pref.edit();
                editor.putString("Password", pText);

                editor.apply();

                JsonObject json = new JsonObject();
                json.addProperty("password", pText);

                Ion.with(Login.this)
                        .load("http://192.168.0.107:6000/api/patient/register")
                        .setJsonObjectBody(json)
                        .asJsonObject()
                        .setCallback(new FutureCallback<JsonObject>() {
                            @Override
                            public void onCompleted(Exception e, JsonObject result) {
                                // do stuff here
                                if (result == null)
                                    Toast.makeText(Login.this, e.getMessage(), Toast.LENGTH_SHORT).show();
                                else {
                                    Intent i = new Intent(Login.this, MainActivity.class);
                                    i.putExtra("string", result.toString());
                                    startActivity(i);
                                }
                                //
                            }
                        });

            }
        });
    }
}
