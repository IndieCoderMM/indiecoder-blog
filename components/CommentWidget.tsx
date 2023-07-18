'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

const REPO_NAME = 'IndieCoderMM/indiecoder-blog';
const REPO_ID = process.env.NEXT_PUBLIC_REPO_ID || 'Repoid';
const CATEGORY_ID = process.env.NEXT_PUBLIC_CATEGORY_ID || 'CategoryId';

export default function CommentWidget() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

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
      theme={currentTheme || 'light'}
      lang="en"
      loading="lazy"
    />
  );
}
