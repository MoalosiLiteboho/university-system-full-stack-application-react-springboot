package com.geniescode.announcement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
    @Query("select announcement from announcements announcement")
    List<Announcement> findAllAnnouncements();
    @Query("select announcement from announcements announcement where announcement.user.id = :userId")
    List<Announcement> findAnnouncementByUserId(Integer userId);
    @Query("select announcement.id from announcements announcement")
    List<Integer> findAllAnnouncementIds();
    boolean existsAnnouncementById(Integer announcementId);
}
