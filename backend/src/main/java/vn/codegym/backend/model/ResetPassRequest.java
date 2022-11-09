package vn.codegym.backend.model;

import lombok.Data;

@Data
public class ResetPassRequest {
    private String newPassword;
    private String confirmPassword;
    private String token;
}
