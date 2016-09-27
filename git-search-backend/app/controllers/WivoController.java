package controllers;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.libs.Json;
import play.mvc.Controller;
import javax.persistence.MappedSuperclass;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * Created by Karina on 9/25/2016.
 */

@MappedSuperclass
public class WivoController extends Controller {

    public static ObjectNode errorResponse(int codeError, String responseMsg) {
        ObjectNode responseNode = Json.newObject();
        responseNode.put("error", codeError);
        responseNode.put("description", responseMsg);
        return responseNode;
    }

    public static ObjectNode getJson(){
        ObjectNode jsonInfo = (ObjectNode) request().body().asJson();
        if(jsonInfo == null){
            Map<String,String[]> b = request().body().asFormUrlEncoded();
            if(b == null){
                return null;
            }
            jsonInfo = Json.newObject();
            Set<String> keys = b.keySet();
            Iterator<String> it = keys.iterator();
            while(it.hasNext()){
                String key = (String)it.next();
                jsonInfo.put(key, Json.toJson(b.get(key)[0]));
            }
        }
        return jsonInfo;
    }

    public static ObjectNode basicResponse(String description,JsonNode innerObj) {
        ObjectNode tr = Json.newObject();
        tr.put("description", description);
        tr.put("response", innerObj);
        return tr;
    }

}
