import * as React from 'react';
import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
// import Loader from '../loader/Loader';
import Layout from '../layout/Layout';
import Resume from '../resume/Resume';
import Blog from '../blog/Blog';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Resume />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}
