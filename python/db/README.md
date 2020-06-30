

# Download chinnok db

References

[sqlite tutoral](https://www.sqlitetutorial.net/)


# Guide

```bash
curl -LO https://cdn.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip
unzip chinook.zip
```

Download a SQLPro viewer (optional)

```bash
brew cask install sqlpro-for-sqlite
```

tracks from album 1 

```sql
SELECT name, milliseconds, bytes, albumid FROM tracks WHERE albumid = 1;
```

join example

```sql
SELECT title 'title', name 'artist'
FROM albums
JOIN artists ON artists.ArtistId = albums.artistId;

join/where example

```sql
SELECT title 'title', name 'artist'
FROM albums
JOIN artists ON artists.ArtistId = albums.artistId
WHERE artists.name='Pearl Jam'
```

