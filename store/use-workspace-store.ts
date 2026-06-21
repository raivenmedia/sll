"use client";

import { create } from "zustand";
import { blogPosts, homepageContent, mediaAssets, portfolioProjects, seoSettings, services } from "@/lib/data";
import type { BlogPost, HomepageContent, MediaAsset, PortfolioProject, SeoSetting, Service } from "@/lib/types";

type WorkspaceState = {
  homepageDraft: HomepageContent;
  servicesDraft: Service[];
  portfolioDraft: PortfolioProject[];
  blogDraft: BlogPost[];
  mediaDraft: MediaAsset[];
  seoDraft: SeoSetting[];
  saveHomepage: (payload: Partial<HomepageContent>) => void;
  updateService: (id: string, payload: Partial<Service>) => void;
  updatePortfolio: (id: string, payload: Partial<PortfolioProject>) => void;
  updateBlog: (id: string, payload: Partial<BlogPost>) => void;
  renameMedia: (id: string, name: string) => void;
  deleteMedia: (id: string) => void;
  updateSeo: (id: string, payload: Partial<SeoSetting>) => void;
};

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  homepageDraft: homepageContent,
  servicesDraft: services,
  portfolioDraft: portfolioProjects,
  blogDraft: blogPosts,
  mediaDraft: mediaAssets,
  seoDraft: seoSettings,
  saveHomepage: (payload) => set((state) => ({ homepageDraft: { ...state.homepageDraft, ...payload } })),
  updateService: (id, payload) =>
    set((state) => ({
      servicesDraft: state.servicesDraft.map((item) => (item.id === id ? { ...item, ...payload } : item)),
    })),
  updatePortfolio: (id, payload) =>
    set((state) => ({
      portfolioDraft: state.portfolioDraft.map((item) => (item.id === id ? { ...item, ...payload } : item)),
    })),
  updateBlog: (id, payload) =>
    set((state) => ({
      blogDraft: state.blogDraft.map((item) => (item.id === id ? { ...item, ...payload } : item)),
    })),
  renameMedia: (id, name) =>
    set((state) => ({
      mediaDraft: state.mediaDraft.map((item) => (item.id === id ? { ...item, name } : item)),
    })),
  deleteMedia: (id) => set((state) => ({ mediaDraft: state.mediaDraft.filter((item) => item.id !== id) })),
  updateSeo: (id, payload) =>
    set((state) => ({ seoDraft: state.seoDraft.map((item) => (item.id === id ? { ...item, ...payload } : item)) })),
}));
