import React,{Suspense} from 'react'
import { Skeleton } from '@mui/material';

function Loader(props: any) {
    const width = "98vw";
    const widthHalf = "50vw";
    const height = "50px";
    return (
      <div style={{ padding: 10 }}>
    <Skeleton
    style={{ backgroundColor: "#cacaca" }}
    variant="text"
    width={width}
    height={height}
    >
    </Skeleton>
    <Skeleton variant="text" width={width} height={height}></Skeleton>
    <Skeleton variant="text" width={widthHalf} height={height}>
    </Skeleton>
    </div>
   );
  }
  export default function SuspenseContainer(props:any) {
    return <Suspense fallback={<Loader />}>{props.children}</Suspense>;
   }