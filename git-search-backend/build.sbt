name := "wivo"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "mysql" % "mysql-connector-java" % "5.1.26",
  "org.codehaus.jackson" % "jackson-mapper-asl" % "1.9.12",
  "org.codehaus.jackson" % "jackson-core-asl" % "1.9.12"
)     

play.Project.playJavaSettings
