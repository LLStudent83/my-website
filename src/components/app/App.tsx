import * as React from 'react';
import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Loader from '../loader/Loader';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Routes />
  );
}
