package models;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.EbeanServer;
import com.avaje.ebean.Page;
import models.WivoModel;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.data.validation.Constraints;
import play.libs.Json;

import javax.persistence.*;
import java.util.List;

/**
 * Created by karina on 9/25/2016.
 */
@Entity
@Table(name="languages")
public class Language extends WivoModel {

    @Id
    private Integer idLanguage;
    @Constraints.Required
    @Constraints.MaxLength(45)
    private String name;

    public static Finder<Integer,Language> finder = new Finder<Integer,Language>(Integer.class,Language.class);

    public Integer getIdLanguage() {
        return idLanguage;
    }

    public void setIdLanguage(Integer idLanguage) {
        this.idLanguage = idLanguage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public ObjectNode toJson() {
        ObjectNode json = Json.newObject();
        json.put("id_Language",idLanguage);
        json.put("name",name);
        return json;
    }
}
