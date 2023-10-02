"use client";

import "react-quill/dist/quill.bubble.css";
import 'react-quill/dist/quill.snow.css';
import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";


import { BsPlusCircle, BsPlusLg, BsUpload, BsFillCameraVideoFill } from 'react-icons/bs';
import { Loading } from "@/components/Loading/LoadingSpinner";


const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);



  const modules = {
    toolbar: [
      // ...
      [{ 'header': '1' }, { 'header': '2' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['clean']
    ],
  };


  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => { },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploadProgress(100);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setLoading(true)
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "sports", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      setLoading(false)
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
    {!loading ?
    <>
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="sports">sports</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="travel">travel</option>
        <option value="fitness">fitness</option>
        <option value="tech">tech</option>
      </select>

      <input
        type="text"
        placeholder="Enter title of your story..."
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.editor}>
        <div className={styles.upload}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            {/* <label htmlFor="image">
              Uplaod image &nbsp;<span><BsUpload /></span>
            </label> */}

            {uploadProgress > 0 && uploadProgress < 100 ?
              <div className={styles['loading-spinner']}>
                <div className={styles.spinner} >
                </div>
                <span className={styles['progress-text']} >{uploadProgress.toFixed(0)}%</span>
              </div> :
              <label htmlFor="image">
                {/* Uplaod image &nbsp;<span><BsUpload /></span> */}

                {uploadProgress == 100 ?
                  <label htmlFor="image">
                    Upload successful
                  </label> :
                  <>Uplaod image &nbsp;<span><BsUpload /></span>
                  </>
                }
              </label>
            }

          </button>


        </div>


        <div className={styles.quill}>
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Write your story..."
            modules={modules}
          />
        </div>
      </div>

      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
      </>

      :
      <Loading />}
    </div>
  );
};

export default WritePage;
