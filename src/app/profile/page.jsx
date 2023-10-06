"use client"

import Link from 'next/link';
import styles from './profile.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function Profile() {

    const { data: session } = useSession();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        if (session) {
            const fetchUserPosts = async () => {
                try {
                    const response = await fetch(`/api/myBlog?emailSlug=${session.user.email}`);
                    const data = await response.json();
                    setUserPosts(data.userPosts);
                } catch (error) {
                    console.error('Error fetching user posts:', error);
                }
            };

            fetchUserPosts();
        }
    }, [session]);

    if (!session) {
        return <div>Not authenticated</div>;
    }

    const { user } = session;
    return (
        <div className={styles.container}>
            <div className={styles.profile_title}>Profile</div>
            <div className={styles.profile}>
                <div className={styles.info}>
                    <h2>Basic Info</h2>
                    <div className={styles.image_box}>
                        <Image src={user?.image} alt="Image" height={100} width={100}/>
                    </div>
                    <div className={styles.input_box}>
                        <input id="name" type="text" value={user.name} />
                        <label htmlFor="name" className={styles.label} readOnly>Name</label>
                    </div>
                    <div className={styles.input_box}>
                        <input id="email" type="text" value={user.email} />
                        <label htmlFor="email" className={styles.label} readOnly>Email</label>
                    </div>


                    <div className={styles.myPost}>
                        <h2>My Posts</h2>
                        <div className={styles.posts}>
                            {userPosts.map((item) => (
                                <Link href={`/posts/${item.slug}`} key={item.id}>
                                    <div className={styles.post_container}>
                                        {item.img && (
                                            <div className={styles.imageContainer}>
                                                <Image src={item.img} alt="" fill className={styles.image} />
                                            </div>
                                        )}
                                        <div className={styles.textContainer}>
                                            <div className={styles.detail}>
                                                <span className={styles.date}>
                                                    {item.createdAt.substring(0, 10)} -{" "}
                                                </span>
                                                <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
                                            </div>
                                            <Link href={`/posts/${item.slug}`}>
                                                <h2>{item.title}</h2>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Profile;


