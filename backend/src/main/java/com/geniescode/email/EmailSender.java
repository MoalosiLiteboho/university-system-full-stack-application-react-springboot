package com.geniescode.email;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Consumer;

@Service
@RequiredArgsConstructor
public class EmailSender implements Consumer<String> {
    @Override
    public void accept(String email) {

    }
}
