package controllers;

import models.Location;
import controllers.WivoController;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.QueryIterator;
import com.avaje.ebean.ExpressionList;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import play.libs.Json;
import play.mvc.Result;

import java.util.Iterator;
import java.util.ArrayList;


public class LocationCtrl extends WivoController{

    /**

     * @return status con el resultado de la operación y listado de lenguajes
     */
    public static Result getLocations(){

        try{
            Iterator<Location> it = Location.finder.all().iterator();

            ArrayList<ObjectNode> list = new ArrayList<ObjectNode>();
            while (it.hasNext()){
                list.add(it.next().toJson());
            }

            return ok(basicResponse("OK",Json.toJson(list)));
        }catch (Exception ex){
            String emsg = "Error desconocido: ";
            String error = ex.getMessage();
            return badRequest(errorResponse(1,emsg+((error==null)?ex.getStackTrace():ex.getMessage())));
        }
    }
}