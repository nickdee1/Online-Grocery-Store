package com.example.demo.service;

import com.example.demo.dao.DAOUnit;
import com.example.demo.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CartService {

    private DAOUnit daoUnit;

    @Autowired
    public CartService(@Qualifier("fakeCart") DAOUnit daoUnit) {
        this.daoUnit = daoUnit;
    }

    public Map<String, List<Item>> getItems() {
        Map<String, List<Item>> output = new HashMap<>();
        output.put("items", daoUnit.getItems());
        return output;
    }

    public void addItem(Item item) {
        daoUnit.addItem(item);
    }

    public void remove(Item item) {
        daoUnit.removeItem(item);
    }

    public Double countPrice() {
        Double out = 0.0;
        for (Item i : daoUnit.getItems()) {
            out += i.getPrice();
        }
        return out;
    }
}
