package com.example.project3.userapi.controllers;


import com.example.project3.controllers.UsersController;
import com.example.project3.models.User;
import com.example.project3.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(UsersController.class)
public class UsersControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper jsonObjectMapper;

    @MockBean
    private UserRepository mockUserRepository;

    private User updatedSecondUser;

    @Before
    public void setUp() {
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

        updatedSecondUser = new User(
                "new_user2",
                "Kick",
                "Mee",
                "password3",
                "Queens 2",
                "NYC is still the best"
        );

        List<User> mockUsers =
                Stream.of(firstUser, secondUser).collect(Collectors.toList());

        given(mockUserRepository.findAll()).willReturn(mockUsers);
        given(mockUserRepository.findOne(1L)).willReturn(firstUser);
        given(mockUserRepository.findOne(4L)).willReturn(null);

        // Mock out Delete to return EmptyResultDataAccessException for missing user with ID of 4
        doAnswer(invocation -> {
            throw new EmptyResultDataAccessException("oh no!", 1234);
        }).when(mockUserRepository).delete(4L);

        given(mockUserRepository.save(updatedSecondUser)).willReturn(updatedSecondUser);

    }

    @Test
    public void findAllUsers_success_returnsStatusOK() throws Exception {

        this.mockMvc
                .perform(get("/users"))
                .andExpect(status().isOk());
    }

    @Test
    public void findAllUsers_success_returnAllUsersAsJSON() throws Exception {

        this.mockMvc
                .perform(get("/users"))
                .andExpect(jsonPath("$", hasSize(2)));
    }
    @Test
    public void findAllUsers_success_returnUserNameForEachUser() throws Exception {

        this.mockMvc
                .perform(get("/users"))
                .andExpect(jsonPath("$[0].userName", is("user1")));
    }

    @Test
    public void findAllUsers_success_returnFirstNameForEachUser() throws Exception {

        this.mockMvc
                .perform(get("/users"))
                .andExpect(jsonPath("$[0].firstName", is("Nick")));
    }

    @Test
    public void findAllUsers_success_returnLastNameForEachUser() throws Exception {

        this.mockMvc
                .perform(get("/users"))
                .andExpect(jsonPath("$[0].lastName", is("Lee")));
    }

    @Test
    public void findUserById_success_returnsStatusOK() throws Exception {

        this.mockMvc
                .perform(get("/users/1"))
                .andExpect(status().isOk());
    }

    @Test
    public void findUserById_success_returnUserName() throws Exception {

        this.mockMvc
                .perform(get("/users/1"))
                .andExpect(jsonPath("$.userName", is("user1")));
    }

    @Test
    public void findUserById_success_returnFirstName() throws Exception {

        this.mockMvc
                .perform(get("/users/1"))
                .andExpect(jsonPath("$.firstName", is("Nick")));
    }

    @Test
    public void findUserById_success_returnLastName() throws Exception {

        this.mockMvc
                .perform(get("/users/1"))
                .andExpect(jsonPath("$.lastName", is("Lee")));
    }

    @Test
    public void findUserById_failure_userNotFoundReturns404() throws Exception {

        this.mockMvc
                .perform(get("/users/4"))
                .andExpect(status().isNotFound());
    }

}
