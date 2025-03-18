import {useForm, Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@heroui/react";
import {states} from "../../constants/states";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FreeConsultForm() {
  const {control, handleSubmit} = useForm();

  return (
    <div className='w-8/12 mt-7 mb-10 flex flex-col rounded-2xl items-center justify-center bg-primary-purple md:py-5'>
      <h2 className='text-white text-left w-full font-DM ml-12 mb-5 font-semibold text-2xl'>
        Book a Free Consult Call
      </h2>
      <form
        className='w-11/12 flex flex-col gap-5'
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
        })}
      >
        <Controller
          name='state'
          control={control}
          defaultValue=''
          rules={{required: true}}
          render={({field}) => (
            <FormControl fullWidth>
              <Select
                {...field}
                displayEmpty
                input={<OutlinedInput />}
                renderValue={(selected) => selected || "Select State"}
                MenuProps={MenuProps}
                className='bg-white rounded-sm'
              >
                <MenuItem disabled value=''>
                  <em>Select State</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem key={state.key} value={state.key}>
                    {state.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name='service'
          control={control}
          defaultValue=''
          rules={{required: true}}
          render={({field}) => (
            <FormControl fullWidth>
              <Select
                {...field}
                displayEmpty
                input={<OutlinedInput />}
                renderValue={(selected) => selected || "Select Service"}
                MenuProps={MenuProps}
                className='bg-white rounded-sm'
              >
                <MenuItem disabled value=''>
                  <em>Select Service</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem key={state.key} value={state.key}>
                    {state.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name='full_name'
          control={control}
          defaultValue=''
          rules={{required: true}}
          render={({field}) => (
            <TextField
              {...field}
              label='Full Name'
              variant='filled'
              required
              className='bg-white rounded-sm'
              fullWidth
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          defaultValue=''
          rules={{required: true}}
          render={({field}) => (
            <TextField
              {...field}
              label='Email Address'
              variant='filled'
              type='email'
              required
              className='bg-white rounded-sm'
              fullWidth
            />
          )}
        />

        <Controller
          name='phone_number'
          control={control}
          defaultValue=''
          rules={{required: true}}
          render={({field}) => (
            <TextField
              {...field}
              label='Phone Number'
              variant='filled'
              type='number'
              required
              className='bg-white rounded-sm'
              fullWidth
            />
          )}
        />

        <Button
          type='submit'
          variant='contained'
          className='bg-secondary-pink text-primary-purple text-md font-DM font-bold p-1 rounded-sm h-10 w-full'
        >
          FIND A THERAPIST
        </Button>
      </form>
    </div>
  );
}
