import {FieldValues, useForm, UseFormProps} from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export function useAppForm<T extends FieldValues>(schema: yup.ObjectSchema<any>, options?: UseFormProps<T>){
    return useForm<T>({
        resolver : yupResolver(schema),
        ...options,
        mode: "onBlur",
    });
}