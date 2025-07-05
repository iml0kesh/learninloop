# Stage 1: Build Spring Boot app
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the built app
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/backend/target/learninloop-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
