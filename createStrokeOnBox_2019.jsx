﻿                                 app.beginUndoGroup("Add Images");                            var myStrokeSize=12;                            var myComp = app.project.activeItem;                            var selectedLayers = myComp.selectedLayers;                            for (m = 0; m<selectedLayers.length; m++)                              {                                  var howFast =Math.round(generateRandomNumber()*100);                                    //var myDesiredComp=selectedLayers[m].source;                                                                        var myObjectAnchorPoint = selectedLayers[m].property("anchorPoint").value;                                    var myObjectPosition = selectedLayers[m].property("position").value;                                    var myObjectSize = [selectedLayers[m].width,selectedLayers[m].height];                                                                       // alert(myObjectSize);                                                         var myShape = myComp.layers.addShape();         var shapeGroup = myShape.property("Contents").addProperty("ADBE Vector Group");         var Rect = shapeGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");            Rect.property("ADBE Vector Rect Size").setValue(myObjectSize);          Rect.property("ADBE Vector Rect Position").setValue([0.0, 0]);           var RectStroke = shapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");         RectStroke.property("ADBE Vector Stroke Color").setValue([30/255,40/255,100/255]);       RectStroke.property("ADBE Vector Stroke Width").setValue(myStrokeSize);                           //SETTING EASEINEASEOUT var easeIn = new KeyframeEase(0.5, 50);var easeOut = new KeyframeEase(0.75, 85);var easeIn2 = new KeyframeEase(0.1, 73);var easeOut2 = new KeyframeEase(0.1, 92.67); //TRIM PATHS  var myTrim = myShape.property("Contents").addProperty("ADBE Vector Filter - Trim");myTrim.property("ADBE Vector Trim End").setValuesAtTimes([myComp.time,myComp.time+1],[0,100]); myTrim.property("ADBE Vector Trim Offset").setValuesAtTimes([myComp.time,myComp.time+1],[-90,0]);  //SETTING EASE ON PROPERTY myTrim.property("ADBE Vector Trim End").setTemporalEaseAtKey(1, [easeIn], [easeOut]); myTrim.property("ADBE Vector Trim End").setTemporalEaseAtKey(2, [easeIn], [easeOut]); myTrim.property("ADBE Vector Trim Offset").setTemporalEaseAtKey(1, [easeIn2], [easeOut2]); myTrim.property("ADBE Vector Trim Offset").setTemporalEaseAtKey(2, [easeIn2], [easeOut2]);                  var myObjectAnchorPoint2= [myObjectAnchorPoint[0]-(myObjectSize[0]*.5),myObjectAnchorPoint[1]-(myObjectSize[1]*.5)];            myShape.property("anchorPoint").setValue(myObjectAnchorPoint2);            myShape.property("position").setValue(myObjectPosition);            //alert("made it");            myShape.moveToBeginning();                            }                            app.endUndoGroup();          