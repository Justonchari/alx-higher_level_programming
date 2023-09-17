#!/usr/bin/python3
'''
Write a script that lists all cities from the database hbtn_0e_4_usa
'''
import MySQLdb
from sys import argv

if __name__ == '__main__':
    db = MySQLdb.connect(
            host='localhost',
            port=3306,
            user=argv[1],
            passwd=argv[2],
            db=argv[3]
            )
    cursor = db.cursor()
    cursor.execute(""" SELECT cities.name
                       FROM states
                       INNER JOIN cities
                       ON states.id = cities.state_id
                       WHERE states.name=%s
                       ORDER BY cities.id """, (argv[4],))
    rows = cursor.fetchall()
    myList = list(row[0] for row in rows)
    print(*myList, sep=", ")
    cursor.close()
    db.close()
