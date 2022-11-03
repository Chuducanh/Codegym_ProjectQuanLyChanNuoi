package vn.codegym.backend.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.codegym.backend.model.User;
import vn.codegym.backend.service.IUserService;

@Service
public class MyUserDetailsServiceImpl implements UserDetailsService {
    private IUserService userService;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = (User)this.userService.findByUsername(username).get();
        if (user == null) {
            throw new UsernameNotFoundException("Username not found: " + username);
        } else {
            return new MyUserDetails(user);
        }
    }
}