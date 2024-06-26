//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const PaymentsTitle = () => {
  const record = useRecordContext();
  return <span>Payments {record ? `"${record.transactionId}"` : ''}</span>;
};

export const PaymentsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="transactionId" />
      <NumberField source="amount" />
      <TextField source="paymentMethods" />
      <ReferenceField source="payerIds" reference="users" />
      <TextField source="paymentStatus" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const PaymentsEdit = () => (
  <Edit title={<PaymentsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="transactionId" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="amount" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="paymentMethods" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="payerIds" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="paymentStatus" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const PaymentsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="transactionId" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="amount" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="paymentMethods" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="payerIds" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="paymentStatus" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  <ReferenceInput
    source="payerIds"
    label="payerIds"
    reference="users"
    alwaysOn
  />,
  ,
];
