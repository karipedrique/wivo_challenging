package models;

import models.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.libs.Json;

import javax.persistence.*;
import java.util.List;

/**
 * Created by karina on 9/25/2016.
 */
@Entity
@Table(name="favorites")
public class Favorite extends WivoModel {

    @Id
    private Integer idFavorite;
    private String login;
    private String  fullName;

    /*@OneToOne
    @JoinColumn(name="id_language")
    private Language language;*/

    private String location;
    private String email;
    private Integer followers;
    private String htmlUrl;
    private String pictureUrl;

    public static Finder<Integer,Favorite> finder = new Finder<Integer,Favorite>(Integer.class,Favorite.class);

    public Integer getIdFavorite() {
        return idFavorite;
    }

    public void setIdFavorite(Integer idFavorite) {
        this.idFavorite = idFavorite;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

   /* public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }*/

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getFollowers() {
        return followers;
    }

    public void setFollowers(Integer followers) {
        this.followers = followers;
    }

    public String getHtmlUrl() {
        return htmlUrl;
    }

    public void setHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    @Override
    public ObjectNode toJson() {
        ObjectNode json = Json.newObject();
        json.put("id_Favorite",idFavorite);
        json.put("login",login);
        json.put("full_name",fullName);
       // json.put("language",language.getName());
        json.put("location",location);
        json.put("email",email);
        json.put("followers",followers);
        json.put("html_url",htmlUrl);
        json.put("avatar_url",pictureUrl);
        return json;
    }
}
