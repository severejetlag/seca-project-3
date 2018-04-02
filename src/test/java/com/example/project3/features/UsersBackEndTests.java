package com.example.project3.features;

import com.example.project3.models.User;
import com.example.project3.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.Is.is;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersBackEndTests {

	@Autowired
	private UserRepository userRepository;

	@Before
	public void setUp() {
		userRepository.deleteAll();
	}

	@After
	public void tearDown() {
		userRepository.deleteAll();
	}

	@Test
	public void shouldAllowFullCrudForAUser() throws Exception {
		User firstUser = new User(
				"user1",
				"Nick",
				"Lee",
				"password",
				"Bronx",
				"I heart NY"
		);

		User secondUser = new User(
				"user2",
				"Lick",
				"Nee",
				"password2",
				"Queens",
				"NYC is the best"
		);

		Stream.of(firstUser, secondUser)
				.forEach(user -> {
					userRepository.save(user);
				});
		when()
				.get("http://localhost:8080/users")
				.then()
				.statusCode(is(200))
				.and()
				.body(containsString("user1"))
				.and()
				.body(containsString("user2"));

		when()
				.get("http://localhost:8080/users/2")
				.then()
				.statusCode(is(200))
				.body(containsString("Lick"))
				.body(containsString("Nee"));

		when()
				.delete("http://localhost:8080/users/2")
				.then()
				.statusCode(is(200));
	}


}
