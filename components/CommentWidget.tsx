'use client';

import Giscus from '@giscus/react';

const REPO_NAME = 'IndieCoderMM/indiecoder-blog';
const REPO_ID = process.env.NEXT_PUBLIC_REPO_ID || '';
const CATEGORY_ID = process.env.NEXT_PUBLIC_CATEGORY_ID || '';

export default function CommentWidget() {
  return (
    <Giscus
      id="comments"
      repo={REPO_NAME}
      repoId={REPO_ID}
      category="Announcements"
      categoryId={CATEGORY_ID}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
