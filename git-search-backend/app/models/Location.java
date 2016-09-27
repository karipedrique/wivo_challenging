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
@Table(name="locations")
public class Location extends WivoModel {

    @Id
    private Integer idLocation;
    @Constraints.Required
    @Constraints.MaxLength(45)
    private String name;
    private String shortName;

    public static Finder<Integer,Location> finder = new Finder<Integer,Location>(Integer.class,Location.class);

    public Integer getIdLocation() {
        return idLocation;
    }

    public void setIdLocation(Integer idLocation) {
        this.idLocation = idLocation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    @Override
    public ObjectNode toJson() {
        ObjectNode json = Json.newObject();
        json.put("id_location",idLocation);
        json.put("name",name);
        json.put("short_name",shortName);
        return json;
    }
}
