package vn.codegym.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import vn.codegym.backend.payload.request.LoginRequest;
import vn.codegym.backend.payload.response.JwtResponse;
import vn.codegym.backend.security.JwtUtil;
import vn.codegym.backend.security.MyUserDetails;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping({"/auth"})
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenManager;
    @Autowired
    private JwtUtil jwtUtil;

    public AuthenticationController() {
    }

    @PostMapping({"/login"})
    public ResponseEntity<JwtResponse> authenticate(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = this.authenManager.
                    authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            MyUserDetails myUserDetails = (MyUserDetails)authentication.getPrincipal();
            List<String> roles = myUserDetails.getAuthorities().stream().
                    map(GrantedAuthority::getAuthority).collect(Collectors.toList());
            String accessToken = this.jwtUtil.generateJwtToken(loginRequest.getUsername());
            JwtResponse jwtResponse = new JwtResponse(myUserDetails.getUsername(), accessToken, roles);
            return new ResponseEntity(jwtResponse, HttpStatus.OK);
        } catch (BadCredentialsException var7) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
