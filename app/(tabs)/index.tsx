import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../ui/components/button";
import FormError from "../ui/components/form-error";

type LoginValues = {
  email: string;
  password: string;
};

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function Index() {
  const initialValues: LoginValues = { email: "", password: "" };
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={async (values, { setStatus }) => {
        setStatus(undefined);
        try {
          console.log("Form is valid! Data:", values);
          router.push("/info-form");
        } catch (err) {
          setStatus(
            "Login failed. Please check your credentials and try again.",
          );
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        status,
      }) => (
        <View>
          <Text>Sign In</Text>

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoCapitalize="none"
            keyboardType="email-address"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          ></TextInput>

          <Text>Password</Text>
          <TextInput
            style={styles.label}
            placeholder="Enter your password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          ></TextInput>
          <FormError message={touched.password ? errors.password : undefined} />

          <Button
            text="Sign In"
            textColor="black"
            bgColor="pink"
            onPress={handleSubmit}
            isLoading={isSubmitting}
          />
          {/* Global Error */}
          {status && <FormError message={status} />}
        </View>
      )}
    </Formik>
  );
}

// add in styles.
const styles = StyleSheet.create({
  input: {},
  label: {},
});
