import { View, Text, Platform, Pressable } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Link, Slot } from "expo-router";

const Layout = () => {
  if (Platform.OS === "web") {
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <header>
          <div
            style={{
              display: "flex",
              gap: 10,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#c7c7c7",
            }}
          >
            <Link href={"/page1"} asChild>
              <Pressable>
                <Text style={{ opacity: 1 }}>Page 1</Text>
              </Pressable>
            </Link>
            <Link href={"/page2"} asChild>
              <Pressable>
                <Text style={{ opacity: 1 }}>Page 2</Text>
              </Pressable>
            </Link>
          </div>
        </header>
        <Slot />
      </div>
    );
  } else {
    return (
      <Drawer>
        <Drawer.Screen
          name="page1"
          options={{ headerTitle: "My Newsfeed", drawerLabel: "News" }}
        />
        <Drawer.Screen
          name="page2"
          options={{ headerTitle: "My Newsfeed", drawerLabel: "Videos" }}
        />
      </Drawer>
    );
  }
};

export default Layout;
