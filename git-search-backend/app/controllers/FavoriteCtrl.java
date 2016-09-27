package controllers;

import models.*;
import controllers.WivoController;

import com.avaje.ebean.ExpressionList;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import play.libs.Json;
import play.mvc.Result;

import java.util.Iterator;
import java.util.ArrayList;


public class FavoriteCtrl extends WivoController{

    public static Result addFavorite(){
        JsonNode userInfo = null;
        try{
            Favorite favorite = new Favorite();
            userInfo = request().body().asJson();
            if(request().body() == null) {
                System.out.println("Body is null");
            }else{
                String body = request().body().toString();
                String bodyJson = body.substring(body.indexOf('{'),body.lastIndexOf('}')+1);
                userInfo = Json.parse(bodyJson);
            }
            if(userInfo != null){
                if(userInfo.hasNonNull("login")){
                    favorite.setLogin(userInfo.get("login").asText());
                }
                if (userInfo.hasNonNull("full_name")) {
                    favorite.setFullName(userInfo.get("full_name").asText());
                }
               /* if (userInfo.hasNonNull("language")) {
                    Language language = Language.finder.byId(userInfo.get("language").asInt());
                    if(language != null){
                        favorite.setLanguage(language);
                    }
                }*/
                if (userInfo.hasNonNull("location")) {
                   favorite.setLocation(userInfo.get("location").asText());
                }
                if(userInfo.hasNonNull("email")){
                    favorite.setEmail(userInfo.get("email").asText());
                }
                if(userInfo.hasNonNull("followers")){
                    favorite.setFollowers(userInfo.get("followers").asInt());
                }else{
                    favorite.setFollowers(0);
                }
                if(userInfo.hasNonNull("html_url")){
                    favorite.setHtmlUrl(userInfo.get("html_url").asText());
                }
                if(userInfo.hasNonNull("avatar_url")){
                    favorite.setPictureUrl(userInfo.get("avatar_url").asText());
                }
                favorite.save();
                ObjectNode answer = Json.newObject();
                answer.put("status",1);
                return ok(basicResponse("OK",answer));
            }else{
                System.out.println("es nulo ");
                throw new Exception("Bad parameters");
            }
        }catch (Exception ex){
            String emsg = "Error desconocido addFavorite: ";
            String error = ex.getMessage();
            return badRequest(errorResponse(-1,emsg+((error==null)?ex.getStackTrace():ex.getMessage())));
        }
    }

    public static Result removeFavorite(String login){
        try{
            Favorite user = Favorite.finder.where().eq("login",login).findUnique();
            if(user != null){
                user.delete();
            }
            ObjectNode answer = Json.newObject();
            answer.put("status",1);
            return ok(basicResponse("OK",answer));
        }catch(Exception ex){
            String emsg = "Error desconocido en removeFavorite: ";
            String error = ex.getMessage();
            return badRequest(errorResponse(-1,emsg+((error==null)?ex.getStackTrace():ex.getMessage())));
        }
    }

    public static Result isFavorite(String login){
        try{
            ObjectNode answer = Json.newObject();
            Favorite user = Favorite.finder.where().eq("login",login).findUnique();
            if(user != null){
                answer.put("favorite",1);
            }else {
                answer.put("favorite", 0);
            }
            return ok(basicResponse("OK",answer));
        }catch(Exception ex){
            String emsg = "Error desconocido en isFavorite: ";
            String error = ex.getMessage();
            return badRequest(errorResponse(-1,emsg+((error==null)?ex.getStackTrace():ex.getMessage())));
        }
    }

    /**
     *
     * @param pageSize tamaño de la página
     * @param page número de página
     * @return status con el resultado de la operación y listado de favoritos
     */
    public static Result getFavorites(Integer page, Integer pageSize){

        try{
            int total = Favorite.finder.findRowCount();
            Iterator<Favorite> it = Favorite.finder.where().orderBy("login asc").setFirstRow(page * pageSize).setMaxRows(pageSize).findList().iterator();

            ArrayList<ObjectNode> list = new ArrayList<ObjectNode>();
            while (it.hasNext()){
                list.add(it.next().toJson());
            }
            ObjectNode result = Json.newObject();
            result.put("total_rows",total);
            result.put("items",Json.toJson(list));
            return ok(basicResponse("OK",result));
        }catch (Exception ex){
            String emsg = "Error desconocido: ";
            String error = ex.getMessage();
            return badRequest(errorResponse(1,emsg+((error==null)?ex.getStackTrace():ex.getMessage())));
        }
    }
}

