package vn.codegym.backend.payload.request;

import lombok.Data;

import javax.validation.constraints.Pattern;

@Data
public class LoginRequest {
    @Pattern(regexp = "[a-zA-Z0-9_-]{5,12}$")
    private String username;
    private String password;
}