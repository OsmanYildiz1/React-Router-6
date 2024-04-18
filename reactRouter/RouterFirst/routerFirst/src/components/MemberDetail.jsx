import React from "react";
import { useParams } from "react-router-dom";
// göderilen parametreyi kullanabilmek için useParams'ı import ettik.

function MemberDetail() {
  //   const params = useParams();
  //   // useParams ile gelen değer key value çifti ile obje olarak gelir.
  //   const memberId = params.memberId;
  const { memberId } = useParams();
  return <div>MemberDetail {memberId}</div>;
}

export default MemberDetail;
