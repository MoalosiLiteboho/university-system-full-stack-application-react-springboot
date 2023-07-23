package com.geniescode.share.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import static java.time.Instant.now;
import static java.time.temporal.ChronoUnit.DAYS;

@Service
public class JWTUtil {
    private static final String SECRET_KEY = "26452948404D6251655468576D5A7134743777217A25432A462D4A614E645266";

    public String extractSubject(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(String subject) {
        return generateToken(
                Map.of(),
                subject);
    }

    public String generateToken(String subject, String ...scopes) {
        return generateToken(
                Map.of("scopes", scopes),
                subject);
    }

    public String generateToken(String subject, List<String> scopes) {
        return generateToken(
                Map.of("scopes", scopes),
                subject);
    }

    public String generateToken(
            Map<String, Object> claims,
            String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Date.from(now()))
                .setExpiration(Date.from(now().plus(15, DAYS)))
                .signWith(
                        getSigInKey(),
                        SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, String username) {
        final String subject = extractSubject(token);
        return (subject.equals(username)) &&
                !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token)
                .before(Date.from(now()));
    }

    private Date extractExpiration(String token) {
        return extractClaim(
                token,
                Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigInKey() {
        byte[] keyBytes = Decoders
                .BASE64
                .decode(SECRET_KEY);
        return Keys
                .hmacShaKeyFor(keyBytes);
    }
}
