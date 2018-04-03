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
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersUIFeatureTest {

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

        firstUser = userRepository.save(firstUser);

        User secondUser = new User(
                "user2",
                "Lick",
                "Nee",
                "password2",
                "Queens",
                "NYC is the best"
        );

        secondUser = userRepository.save(secondUser);

        System.setProperty("selenide.browser", "Chrome");

    }
}
