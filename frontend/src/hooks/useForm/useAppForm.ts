import {FieldValues, useForm} from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export function useAppForm<T extends FieldValues>(schema: yup.ObjectSchema<any>){
    return useForm<T>({
        resolver : yupResolver(schema),
        mode: "onBlur",
    });
}