#!/usr/bin/jjs -fv

var cmd = "docker build -t registry:5000/robertbrem/jenkins ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
