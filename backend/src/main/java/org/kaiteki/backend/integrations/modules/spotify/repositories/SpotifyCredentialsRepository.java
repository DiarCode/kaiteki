package org.kaiteki.backend.integrations.modules.spotify.repositories;

import org.kaiteki.backend.integrations.modules.spotify.models.SpotifyCredentials;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface SpotifyCredentialsRepository extends MongoRepository<SpotifyCredentials, String> {
    Optional<SpotifyCredentials> findByUserId(Long userId);
}
