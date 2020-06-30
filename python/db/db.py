#!/usr/bin/python

import sqlite3

con = sqlite3.connect("chinook.db")
cursor = con.cursor()
cursor.execute("select title from albums")
rows = cursor.fetchall()
for row in rows:
	print(row)


