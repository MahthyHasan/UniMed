package cst.group19.uniMed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import com.mongodb.client.MongoClients;

@SpringBootApplication
@RestController


@EnableMongoRepositories("cst.group19.uniMed.Repo")

public class UniMedApplication {


	public static void main(String[] args) {
		SpringApplication.run(UniMedApplication.class, args);
	}
	@Configuration
	public class MongoConfig {

		@Bean
		public MongoTemplate mongoTemplate() throws Exception {
			return new MongoTemplate(MongoClients.create("mongodb+srv://testuser:asdf1234@cluster0.wvqeulj.mongodb.net/uniMed"));
		}
	}

	@GetMapping("/")
	public String apiroot(){
		return "hello Students";
	}




}
