package com.geniescode.share.id;

import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.function.Function;
import java.util.function.Supplier;

@Service
public class IdGenerator implements Function<List<Integer>, Integer> {
    @Override
    public Integer apply(List<Integer> idList) {
        Integer id = generateId.get();

        while (idList.contains(id)) {
            id = generateId.get();
        }

        return id;
    }

    private final Supplier<Integer> generateId = () -> {
        Calendar calendar = Calendar.getInstance();
        return Integer.parseInt(
                String.valueOf(calendar.get(Calendar.MONTH))
                        + calendar.get(Calendar.DAY_OF_MONTH)
                        + calendar.get(Calendar.HOUR_OF_DAY)
                        + calendar.get(Calendar.MINUTE)
                        + calendar.get(Calendar.SECOND)
        );
    };
}