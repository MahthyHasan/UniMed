package cst.group19.uniMed.Config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfig {

    @Bean
    public MongoTemplate mongoTemplate() {
        MongoClient mongoClient = MongoClients.create("mongodb+srv://testuser:asdf1234@cluster0.wvqeulj.mongodb.net/uniMed");
        return new MongoTemplate(mongoClient, "uniMed");
    }
}
