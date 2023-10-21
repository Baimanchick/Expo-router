import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  return (
    <View>
      <Link href={"/"} replace asChild>
        <Button title="Logout" />
      </Link>
      <Button
        onPress={() => router.push("/(tabs)/one/details")}
        title="Open details"
      />
      <Button
        onPress={() => router.push("/(tabs)/one/123")}
        title="Open details 123"
      />

      <Button
        onPress={() => router.push("/(tabs)/one/918")}
        title="Open details 918"
      />
      <Button onPress={() => router.push("/modal")} title="Open modal" />
      <Button
        onPress={() => router.push("/(aux)/disclamer")}
        title="Open disclamer"
      />
    </View>
  );
};

export default Page;
