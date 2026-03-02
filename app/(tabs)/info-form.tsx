import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

type infoValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  sin: string;
  emergencyName: string;
  emergencyPhone: string;
};

const infoSchema = Yup.object({
  firstName: Yup.string().required("First name cannot be blank"),
  lastName: Yup.string().required("Last name cannot be blank"),
  phone: Yup.string()
    .required("Phone number cannot be blank")
    .max(10, "Phone number cannot be longer than 10 digits"),
  email: Yup.string().email("Must be a valid email"),
  sin: Yup.string()
    .required("SIN cannot be blank")
    .max(9, "SIN cannot be longer than 9 digits"),
  emergencyName: Yup.string().required("Emergency contact must be provided"),
  emergencyPhone: Yup.string()
    .required("Emergency contact's phone number must be provided")
    .max(10, "Phone number cannot be longer than 10 digits"),
});

export default function InfoForm() {
  const initialValues: infoValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    sin: "",
    emergencyName: "",
    emergencyPhone: "",
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Employee Information Form</Text>
        </View>
        <Formik initialValues={initialValues} validationSchema={infoSchema}>
          {{
            values,
            errors,
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {},
  headerText: {},
});
